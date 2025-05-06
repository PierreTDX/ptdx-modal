import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.scss';

const Modal = ({
    isOpen, // Détermine si la modale est ouverte
    onClose, // Fonction pour fermer la modale
    onConfirm, // Fonction pour confirmer l'action
    content, // Le contenu de la modale
    title, // Le titre de la modale
    btnClose = true, //  Décide si la croix pour fermer la modale doit être affichée
    width = '400px', // Largeur de la modale
    confirmText = 'OK', // Texte du bouton de confirmation
    cancelText = 'Cancel', // Texte du bouton d'annulation
    showFooter = true, // Décide si le pied de page avec les boutons doit être affiché
    className = 'modal-wrapper', // Classe personnalisée pour la modale
    variant = 'default', // ➔ 'default' | 'success' | 'error'
    timeToClose = null // timer pour fermer automatiquement la modale
}) => {
    const confirmBtnRef = useRef(null);
    const closeBtnRef = useRef(null);
    const modalRef = useRef(null);

    const [shouldRender, setShouldRender] = useState(isOpen);
    const [animationOut, setAnimationOut] = useState(false);

    // Fonction pour gérer le focus dans la modale
    const trapFocus = (e) => {
        if (modalRef.current) {
            const focusableElements = modalRef.current.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (e.key === 'Tab') {
                if (e.shiftKey && document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                } else if (!e.shiftKey && document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        }
    };

    // Gérer le changement d'état isOpen et les animations
    useEffect(() => {
        const html = document.documentElement;

        if (isOpen) {
            html.style.overflow = 'hidden';
            setShouldRender(true); // Permet au DOM de se monter
            setAnimationOut(false); // Lance l'animation d’entrée
        } else {
            setAnimationOut(true); // Lance l'animation de sortie
            const timeout = setTimeout(() => {
                setShouldRender(false); // Supprime le rendu après 300ms
            }, 300);
            return () => clearTimeout(timeout);
        }

        const handleKeydown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            } else if (e.key === 'Tab') {
                trapFocus(e);
            } else if (!showFooter && e.key === 'Enter') {
                e.preventDefault();
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeydown);
        return () => {
            document.removeEventListener('keydown', handleKeydown);
            html.style.overflow = '';
        };
    }, [isOpen, onClose, showFooter]);

    // Logique de focus sur les boutons
    useEffect(() => {
        if (!shouldRender) return;

        const confirmBtn = confirmBtnRef.current;
        const closeBtn = closeBtnRef.current;
        const targetBtn = showFooter ? confirmBtn : closeBtn;

        if (targetBtn) {
            targetBtn.focus();
            if (showFooter && confirmBtn) {
                confirmBtn.classList.add(styles.forceFocusVisible, 'modal-forceFocusVisible');

                const handleBlur = () => {
                    confirmBtn.classList.remove(styles.forceFocusVisible, 'modal-forceFocusVisible');
                    confirmBtn.removeEventListener('blur', handleBlur);
                };

                confirmBtn.addEventListener('blur', handleBlur);
            }
        }
    }, [shouldRender, showFooter]);

    // Fonction de fermeture automatique basée sur timeToClose
    useEffect(() => {
        let autoCloseTimer;

        if (isOpen && typeof timeToClose === 'number' && timeToClose > 0) {
            autoCloseTimer = setTimeout(() => {
                onClose();
            }, timeToClose);
        }

        return () => {
            if (autoCloseTimer) {
                clearTimeout(autoCloseTimer);
            }
        };
    }, [isOpen, timeToClose, onClose]);

    // Si la modale ne doit pas être rendue, rien n'est affiché
    if (!shouldRender) return null;

    const handleCloseOutside = (e) => {
        if (e.target.classList.contains(styles.overlay)) {
            onClose();
        }
    };

    const titleId = 'modal-title';
    const contentId = 'modal-content';
    const containerClass = `${styles.container} ${animationOut ? styles.containerFadeOut : ''} ${variant === 'success' ? styles.success : ''} ${variant === 'error' ? styles.error : ''}`;

    return ReactDOM.createPortal(
        <div className={`${className}`}>
            <div
                className={`modal-overlay ${styles.overlay} ${animationOut ? styles.overlayFadeOut : ''}`}
                onClick={handleCloseOutside}
                role="dialog"
                aria-modal="true"
                aria-labelledby={title ? titleId : undefined}
                aria-describedby={typeof content === 'string' ? contentId : undefined}
            >
                <div
                    className={`modal-border ${variant === 'default' ? 'modal-container' : ''} ${variant === 'success' ? 'modal-container-success' : ''} ${variant === 'error' ? 'modal-container-error' : ''} ${containerClass}`}
                    style={{ width }}
                    ref={modalRef}
                >
                    {title && (
                        <h2 className={`modal-title ${styles.title}`} id={titleId}>
                            {title}
                        </h2>
                    )}
                    {btnClose && (
                        <button
                            className={`modal-close ${styles.close}`}
                            onClick={onClose}
                            aria-label="Close dialog box"
                            ref={closeBtnRef}
                            title="Close dialog box"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                                focusable="false"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    )}

                    <div
                        className={`modal-content ${styles.content}`}
                        id={typeof content === 'string' ? contentId : undefined}
                    >
                        {typeof content === 'string' ? <p>{content}</p> : content}
                    </div>

                    {showFooter && (
                        <div className={`modal-footer ${styles.footer}`}>
                            {cancelText && (
                                <button
                                    className={`modal-btn modal-btn-cancel ${styles.btn} ${styles.cancel}`}
                                    onClick={onClose}
                                    aria-label="Cancel"
                                    title="Cancel"
                                >
                                    {cancelText}
                                </button>
                            )}
                            {confirmText && (
                                <button
                                    className={`modal-btn modal-btn-confirm ${styles.btn} ${styles.confirm}`}
                                    onClick={onConfirm}
                                    aria-label="Confirm"
                                    ref={confirmBtnRef}
                                    title="Confirm"
                                >
                                    {confirmText}
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>,
        document.body
    );
};

export default Modal;
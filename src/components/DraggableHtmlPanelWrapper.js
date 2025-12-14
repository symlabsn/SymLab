'use client';
import dynamic from 'next/dynamic';

// Import dynamique pour éviter les erreurs SSR avec R3F
const DraggableHtmlPanelInner = dynamic(
    () => import('./DraggableHtmlPanel'),
    { ssr: false }
);

// Wrapper qui garantit le rendu uniquement côté client
export default function DraggableHtmlPanelWrapper(props) {
    return <DraggableHtmlPanelInner {...props} />;
}

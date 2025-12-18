'use client';

import { AnalyticsProvider, WelcomeModal, FeedbackModal } from '@/components/Analytics';

export default function AnalyticsWrapper({ children }) {
    return (
        <AnalyticsProvider>
            {children}
            <WelcomeModal />
            <FeedbackModal />
        </AnalyticsProvider>
    );
}

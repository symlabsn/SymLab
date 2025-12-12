'use client';

import { useEffect } from 'react';
import MathPythonCourseViewer from '../../../components/MathPythonCourseViewer';

export default function MasterclassPage() {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <MathPythonCourseViewer />;
}

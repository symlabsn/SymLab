'use client';
import React, { createContext, useContext, useState, useCallback } from 'react';

/**
 * Contexte pour gérer l'état partagé entre les simulations 3D et les panneaux de contrôle externes
 * Permet de séparer les contrôles UI du Canvas Three.js
 */
const SimulationControlsContext = createContext(null);

/**
 * Hook pour accéder aux contrôles de simulation
 */
export const useSimulationControls = () => {
    const context = useContext(SimulationControlsContext);
    if (!context) {
        throw new Error('useSimulationControls must be used within a SimulationControlsProvider');
    }
    return context;
};

/**
 * Provider pour les contrôles de simulation
 * Gère l'état partagé et expose des fonctions pour le modifier
 */
export const SimulationControlsProvider = ({ children, initialState = {} }) => {
    const [controls, setControls] = useState(initialState);
    const [isPanelVisible, setIsPanelVisible] = useState(true);

    // Met à jour un contrôle spécifique
    const updateControl = useCallback((key, value) => {
        setControls(prev => ({ ...prev, [key]: value }));
    }, []);

    // Met à jour plusieurs contrôles à la fois
    const updateControls = useCallback((updates) => {
        setControls(prev => ({ ...prev, ...updates }));
    }, []);

    // Réinitialise tous les contrôles
    const resetControls = useCallback(() => {
        setControls(initialState);
    }, [initialState]);

    const value = {
        controls,
        setControls,
        updateControl,
        updateControls,
        resetControls,
        isPanelVisible,
        setIsPanelVisible
    };

    return (
        <SimulationControlsContext.Provider value={value}>
            {children}
        </SimulationControlsContext.Provider>
    );
};

/**
 * Configurations par défaut pour chaque type de simulation PC 3e et PC 4e
 */
export const defaultSimulationConfigs = {
    // ========== PC 3e ==========
    'lens-optics': {
        lensType: 'convergent',
        focalLength: 2,
        objectDistance: 4,
        showRays: true
    },
    'light-dispersion': {
        prismAngle: 60,
        showSpectrum: true,
        lightSource: 'white'
    },
    'forces-vectors': {
        mass: 5,
        showComponents: true,
        gravity: 10,
        showGrid: true
    },
    'work-power': {
        force: 100,
        distance: 5,
        time: 10,
        showEnergy: true
    },
    'electrostatics': {
        charge1: 'positive',
        charge2: 'negative',
        showField: true
    },
    'ohm-law-circuit': {
        voltage: 12,
        resistance: 4,
        showVoltmeter: true,
        showAmmeter: true
    },
    'energy-flow': {
        deviceType: 'motor',
        showEfficiency: true,
        showSankey: true
    },

    // ========== PC 4e ==========
    'mixture-separation': {
        method: 'filtration',
        showAnimation: true,
        challengeMode: false
    },
    'atom-builder': {
        protons: 6,
        neutrons: 6,
        electrons: 6,
        showOrbits: true
    },
    'mole-concept': {
        substance: 'carbon',
        mass: 12,
        showAvogadro: true
    },
    'mass-conservation': {
        showMassBefore: true,
        showMassAfter: true,
        reactionType: 'combustion'
    },
    'scientific-method': {
        currentStep: 0,
        hypothesis: null,
        showResults: false
    },
    'density-explorer': {
        liquid: 'water',
        showCalculation: true,
        challengeMode: false
    },
    'measurement-tools': {
        toolType: 'ruler',
        precision: 1,
        showError: true
    },
    'refraction-simulator': {
        angle: 30,
        medium1: 'air',
        medium2: 'water',
        showSnell: true
    },
    'circuit-series-parallel': {
        circuitType: 'series',
        bulbStates: [true, true, true],
        voltage: 12
    }
};

export default SimulationControlsContext;

"use client";

/**
 * usePriceCalculator Hook
 * 
 * Handles real-time price calculation for floor plan detail page
 * Manages base price + selected upgrade options + upgrade package
 * 
 * @param {Object} params
 * @param {number} params.basePrice - Base price of the floor plan
 * @param {Array} params.availableOptions - Available upgrade options for this plan
 * @param {Array} params.availablePackages - Global upgrade packages
 * @returns {Object} Price state and handlers
 */

import { useState, useMemo, useCallback } from "react";

export function usePriceCalculator({
  basePrice = 0,
  availableOptions = [],
  availablePackages = [],
}) {
  // -----------------------------------------
  // STATE
  // -----------------------------------------
  
  // Selected upgrade option IDs (multi-select)
  const [selectedOptionIds, setSelectedOptionIds] = useState([]);
  
  // Selected package ID (single-select, can be null)
  const [selectedPackageId, setSelectedPackageId] = useState(null);

  // -----------------------------------------
  // COMPUTED VALUES
  // -----------------------------------------
  
  /**
   * Get full option objects for selected options
   */
  const selectedOptions = useMemo(() => {
    return availableOptions.filter((opt) => 
      selectedOptionIds.includes(opt.id)
    );
  }, [availableOptions, selectedOptionIds]);

  /**
   * Get selected package object
   */
  const selectedPackage = useMemo(() => {
    if (!selectedPackageId) return null;
    return availablePackages.find((pkg) => pkg.id === selectedPackageId) || null;
  }, [availablePackages, selectedPackageId]);

  /**
   * Calculate total for selected upgrade options
   */
  const optionsTotal = useMemo(() => {
    return selectedOptions.reduce((sum, opt) => sum + (opt.price || 0), 0);
  }, [selectedOptions]);

  /**
   * Get package price (0 if none selected)
   */
  const packagePrice = useMemo(() => {
    return selectedPackage?.price || 0;
  }, [selectedPackage]);

  /**
   * Calculate final total price
   */
  const totalPrice = useMemo(() => {
    return basePrice + optionsTotal + packagePrice;
  }, [basePrice, optionsTotal, packagePrice]);

  /**
   * Price breakdown object for display
   */
  const breakdown = useMemo(() => {
    return {
      basePrice,
      optionsTotal,
      packagePrice,
      packageName: selectedPackage?.name || null,
      totalPrice,
      selectedOptions,
      selectedPackage,
    };
  }, [
    basePrice,
    optionsTotal,
    packagePrice,
    selectedPackage,
    totalPrice,
    selectedOptions,
  ]);

  // -----------------------------------------
  // HANDLERS
  // -----------------------------------------

  /**
   * Toggle an upgrade option on/off
   * @param {string} optionId - Option ID to toggle
   */
  const toggleOption = useCallback((optionId) => {
    setSelectedOptionIds((prev) => {
      if (prev.includes(optionId)) {
        // Remove option
        return prev.filter((id) => id !== optionId);
      } else {
        // Add option
        return [...prev, optionId];
      }
    });
  }, []);

  /**
   * Check if an option is selected
   * @param {string} optionId - Option ID to check
   * @returns {boolean}
   */
  const isOptionSelected = useCallback(
    (optionId) => {
      return selectedOptionIds.includes(optionId);
    },
    [selectedOptionIds]
  );

  /**
   * Select a package (replaces any previous selection)
   * @param {string|null} packageId - Package ID or null to deselect
   */
  const selectPackage = useCallback((packageId) => {
    setSelectedPackageId(packageId);
  }, []);

  /**
   * Check if a package is selected
   * @param {string} packageId - Package ID to check
   * @returns {boolean}
   */
  const isPackageSelected = useCallback(
    (packageId) => {
      return selectedPackageId === packageId;
    },
    [selectedPackageId]
  );

  /**
   * Reset all selections
   */
  const resetSelections = useCallback(() => {
    setSelectedOptionIds([]);
    setSelectedPackageId(null);
  }, []);

  /**
   * Set specific options (for loading saved selections)
   * @param {Array} optionIds - Array of option IDs
   */
  const setOptions = useCallback((optionIds) => {
    setSelectedOptionIds(optionIds);
  }, []);

  // -----------------------------------------
  // RETURN
  // -----------------------------------------

  return {
    // State
    selectedOptionIds,
    selectedPackageId,
    
    // Computed
    selectedOptions,
    selectedPackage,
    optionsTotal,
    packagePrice,
    totalPrice,
    breakdown,
    
    // Handlers
    toggleOption,
    isOptionSelected,
    selectPackage,
    isPackageSelected,
    resetSelections,
    setOptions,
  };
}

export default usePriceCalculator;
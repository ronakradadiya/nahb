"use client";

/**
 * Dropdown Component
 * 
 * Select dropdown with custom styling
 */

import { cn } from "@/lib/utils";

export function Dropdown({
  options = [],
  value,
  onChange,
  placeholder = "Select an option",
  label,
  id,
  className,
  disabled = false,
  ...props
}) {
  const dropdownId = id || `dropdown-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={cn("w-full", className)}>
      {/* Label */}
      {label && (
        <label
          htmlFor={dropdownId}
          className="block text-sm font-medium text-ebony mb-2"
        >
          {label}
        </label>
      )}

      {/* Select */}
      <div className="relative">
        <select
          id={dropdownId}
          value={value || ""}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={disabled}
          className={cn(
            "w-full px-4 py-3 rounded appearance-none cursor-pointer",
            "border border-dun-300 bg-white text-ebony",
            "focus:outline-none focus:ring-2 focus:ring-reseda-400 focus:border-transparent",
            "transition-all duration-200",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            // Custom arrow
            "bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23414833%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M5.23%207.21a.75.75%200%20011.06.02L10%2011.168l3.71-3.938a.75.75%200%20111.08%201.04l-4.25%204.5a.75.75%200%2001-1.08%200l-4.25-4.5a.75.75%200%20010-1.06z%22%20clip-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')]",
            "bg-[length:1.25rem_1.25rem] bg-[right_0.75rem_center] bg-no-repeat pr-10"
          )}
          {...props}
        >
          {/* Placeholder option */}
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}

          {/* Options */}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Dropdown;
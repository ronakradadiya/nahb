"use client";

/**
 * Checkbox Component
 * 
 * Custom styled checkbox for upgrade options
 */

import { cn } from "@/lib/utils";

export function Checkbox({
  id,
  checked = false,
  onChange,
  label,
  description,
  price,
  disabled = false,
  className,
  ...props
}) {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <label
      htmlFor={checkboxId}
      className={cn(
        "flex items-start gap-3 p-4 rounded-lg cursor-pointer",
        "border-2 transition-all duration-200",
        checked
          ? "border-reseda bg-reseda/5"
          : "border-dun-200 hover:border-dun-300",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {/* Custom Checkbox */}
      <div className="relative flex-shrink-0 mt-0.5">
        <input
          type="checkbox"
          id={checkboxId}
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
          disabled={disabled}
          className="sr-only peer"
          {...props}
        />
        <div
          className={cn(
            "w-5 h-5 rounded border-2 transition-all duration-200",
            "flex items-center justify-center",
            checked
              ? "bg-reseda border-reseda"
              : "bg-white border-dun-300 peer-hover:border-reseda"
          )}
        >
          {checked && (
            <svg
              className="w-3 h-3 text-white"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 3L4.5 8.5L2 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>

      {/* Label Content */}
      <div className="flex-grow">
        <div className="flex items-center justify-between gap-4">
          <span className="font-medium text-ebony">{label}</span>
          {price !== undefined && (
            <span className="text-reseda font-medium whitespace-nowrap">
              +${price.toLocaleString()}
            </span>
          )}
        </div>
        {description && (
          <p className="text-sm text-ebony/60 mt-1">{description}</p>
        )}
      </div>
    </label>
  );
}

export default Checkbox;
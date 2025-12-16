"use client";

/**
 * RadioGroup Component
 * 
 * Single-select radio group for upgrade packages
 */

import { cn } from "@/lib/utils";

export function RadioGroup({
  options = [],
  value,
  onChange,
  name,
  label,
  className,
  ...props
}) {
  const groupName = name || `radio-group-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={cn("space-y-3", className)} role="radiogroup" {...props}>
      {/* Group Label */}
      {label && (
        <label className="block text-sm font-medium text-ebony mb-3">
          {label}
        </label>
      )}

      {/* Radio Options */}
      {options.map((option) => (
        <RadioOption
          key={option.id}
          name={groupName}
          option={option}
          checked={value === option.id}
          onChange={() => onChange?.(option.id)}
        />
      ))}
    </div>
  );
}

function RadioOption({ name, option, checked, onChange }) {
  const { id, name: optionName, description, price, items } = option;

  return (
    <label
      htmlFor={id}
      className={cn(
        "block p-4 rounded-lg cursor-pointer",
        "border-2 transition-all duration-200",
        checked
          ? "border-reseda bg-reseda/5"
          : "border-dun-200 hover:border-dun-300"
      )}
    >
      <div className="flex items-start gap-3">
        {/* Custom Radio */}
        <div className="relative flex-shrink-0 mt-0.5">
          <input
            type="radio"
            id={id}
            name={name}
            checked={checked}
            onChange={onChange}
            className="sr-only peer"
          />
          <div
            className={cn(
              "w-5 h-5 rounded-full border-2 transition-all duration-200",
              "flex items-center justify-center",
              checked
                ? "border-reseda"
                : "border-dun-300 peer-hover:border-reseda"
            )}
          >
            {checked && (
              <div className="w-2.5 h-2.5 rounded-full bg-reseda" />
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-grow">
          <div className="flex items-center justify-between gap-4">
            <span className="font-medium text-ebony">{optionName}</span>
            {price !== undefined && (
              <span className="text-reseda font-semibold whitespace-nowrap">
                +${price.toLocaleString()}
              </span>
            )}
          </div>

          {description && (
            <p className="text-sm text-ebony/60 mt-1">{description}</p>
          )}

          {/* Items List (for packages) */}
          {items && items.length > 0 && (
            <ul className="mt-3 space-y-1">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="text-sm text-ebony/70 flex items-start gap-2"
                >
                  <svg
                    className="w-4 h-4 text-sage flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </label>
  );
}

export default RadioGroup;
import * as React from 'react';

type FormFieldProps = React.ComponentProps<'input'> & {
  label: string;
  icon?: React.ReactNode;
};

export function FormField({ label, icon, className, id, ...props }: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium text-[#E4E4E7]">
        {label}
      </label>

      <div className="relative">
        {icon && (
          <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-[#71717A]">
            {icon}
          </div>
        )}

        <input id={id} className={className} {...props} />
      </div>
    </div>
  );
}

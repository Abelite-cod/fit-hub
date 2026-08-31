import { clsx } from 'clsx';

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = 'left',
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={clsx('mb-10 lg:mb-14', align === 'center' && 'text-center', className)}>
      {label && <p className="label-text mb-3">{label}</p>}
      <h2
        className={clsx(
          'heading-lg mb-4',
          light ? 'text-az-offwhite' : 'text-az-offwhite'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            'body-lg max-w-2xl',
            align === 'center' && 'mx-auto',
            'text-az-offwhite/70'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

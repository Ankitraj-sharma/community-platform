import type * as React from 'react';
import { cn } from '@/lib/utils';
import WebsiteIcon from './icons/website.svg?react';

export interface ProfileLinkProps extends React.ComponentProps<'div'> {
  url: string;
}

export function ProfileLink({ url, className, ...props }: ProfileLinkProps) {
  return (
    <div data-slot="profile-link" className={cn('flex items-center gap-2', className)} {...props}>
      <WebsiteIcon className="size-5 shrink-0 text-foreground" />
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        data-cy="profile-website"
        className="text-foreground underline underline-offset-3 hover:text-primary break-all"
      >
        {url}
      </a>
    </div>
  );
}

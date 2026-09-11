// Whether to label keyboard shortcuts with ⌘ or Ctrl. Four components used to
// detect this independently, each through the deprecated navigator.platform.
'use client';

import { useEffect, useState } from 'react';

type NavigatorWithUserAgentData = Navigator & {
  userAgentData?: { platform?: string };
};

export function useIsMac(): boolean {
  // Starts false and settles after mount: there is no navigator during the
  // static export, so resolving this during render would mismatch hydration.
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    const { userAgentData } = navigator as NavigatorWithUserAgentData;
    const platform = userAgentData?.platform ?? navigator.userAgent;
    setIsMac(/mac/i.test(platform));
  }, []);

  return isMac;
}

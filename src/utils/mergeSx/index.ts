import type { SxProps, Theme } from '@mui/material';

import mergeObjects from '../mergeObjects';

const mergeSx =
    (
        ...source: Array<SxProps<Theme> | null | undefined>
    ): SxProps<Theme> =>
        mergeObjects(...source);

export default mergeSx;
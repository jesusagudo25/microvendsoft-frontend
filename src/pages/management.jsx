import { Helmet } from 'react-helmet-async';

import { ManagementView } from 'src/sections/management/view';

// ----------------------------------------------------------------------

export default function AppPage() {
  return (
    <>
      <Helmet>
        <title> Management | MicroVendSoft - AgudoBot Cloud </title>
      </Helmet>

      <ManagementView />
    </>
  );
}

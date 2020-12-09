import React, { Suspense, useState } from 'react'
import { render } from 'react-dom';

const BulkSelectTableDemo = React.lazy(() => import(/* webpackChunkName: "table" */'./lazy-table'))
const FlexLazy = React.lazy(() => import(/* webpackChunkName: "flex" */'./flex-lazy'))

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading</div>}>
          <BulkSelectTableDemo />
      </Suspense>
    </div>
  )
}

render(<App />, document.getElementById("root"));

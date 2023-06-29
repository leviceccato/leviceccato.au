// Layout is a wrapper around Page to provide styling
// and markup. This should be used at the root element
// in route components.

import * as t from '#/utils/toolkit'
import Page, { type PageProps } from '#/components/Page'

export default t.component<PageProps>((props) => {
    return (
        <Page
            title={props.title}
            description={props.description}
            head={props.head}
            routeDataId="route-data"
            headDataAttr="route-head"
        >
            <main>
                {props.children}
            </main>
        </Page>
    )
})
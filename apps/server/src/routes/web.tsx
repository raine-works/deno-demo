import type { FC } from 'jsr:@hono/hono/jsx'

const Layout: FC = (props) => {
    return (
        <>
            <head>
                <title>Hono on Deno 2</title>
            </head>
            <html>
                <body>{props.children}</body>
            </html>
        </>
    )
}

export const Top: FC<{ messages: string[] }> = async (props: {
    messages: string[]
}) => {
    return (
        <Layout>
            <h1>Hello Hono!</h1>
            <ul>
                {props.messages.map((message) => {
                    return <li>{message}!</li>
                })}
            </ul>
        </Layout>
    )
}

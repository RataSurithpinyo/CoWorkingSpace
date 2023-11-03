export default async function Layout(props: {
    children: React.ReactNode,
    dashboard: React.ReactNode
}) {
    return (
        <main>
            {props.dashboard}
            {props.children}
        </main>
    )
}
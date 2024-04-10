export default function Hamburgers({
    params,
    searchParams,
}) {
    console.log(params)
    console.log(searchParams)
    return (
        <>
            <h1>Hamburgers</h1>
            {JSON.stringify(params)}
            {JSON.stringify(searchParams)}
        </>
    )
}
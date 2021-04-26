const Page = ( { page } ) => {

    return(
        <div>
            <div className="font-weight-bold">{page.title}</div>
            <hr />
            <div>{page.body}</div>
        </div>
    )
}

export default Page;

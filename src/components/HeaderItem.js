/*--------------------------------------------------- 
            Header Reusable Components
-----------------------------------------------------*/
function HeaderItem ({ title })
{
    return (
        <div className="cursor-pointer mx-3 hover:text-white hover:underline underline-offset-8 decoration-1">
            <p style={{ fontFamily: 'Poiret One, cursive' }} className="text-lg sm:text-xl">
                {title}
            </p>
        </div>
    )
}

export default HeaderItem

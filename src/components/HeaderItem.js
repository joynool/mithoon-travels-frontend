/*--------------------------------------------------- 
            Header Reusable Components
-----------------------------------------------------*/
function HeaderItem ({ Icon, title })
{
    return (
        <div className="cursor-pointer mx-3 hover:text-white hover:underline underline-offset-8 decoration-1">
            <p style={{ fontFamily: 'Poiret One, cursive' }} className="text-xl">
                {title}
            </p>
        </div>
    )
}

export default HeaderItem

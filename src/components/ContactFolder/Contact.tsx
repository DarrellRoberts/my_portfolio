import "../../style/Contact.css"

const Contact:React.FC = () => {
    return (
<>
<div className="h-[1000px] bg-primary">
<h2 className="contactTitle">Contact</h2>
<div className="flex justify-center items-center flex-col overflow-visible ">
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeba6ZIZi2HQ-QulNeJCxUms9EfsAAREhxVzX9wyWU1ze_zUg/viewform?embedded=true" width="640" height="850">Loading…</iframe>
</div>
</div>
</>
    )
}
export default Contact
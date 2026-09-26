const envelope = document.getElementById("envelope");
const extra = document.getElementById("extra");
const title = document.getElementById("title");
let opened = false;
function openInvitation() {
    if (opened) return;
    opened = true;
    envelope.classList.add("open");
    title.style.opacity = "0";
    title.style.transform = "translateY(-20px)";
    setTimeout(() => {
        extra.classList.add("show");
        extra.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }, 1300);
}
function replayInvitation() {
    opened = false;
    extra.classList.remove("show");
    envelope.classList.remove("open");
    title.style.opacity = "1";
    title.style.transform = "translateY(0)";
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
async function copyInvitation() {
    const text =
        `THE SECRET BALL
        Date: ?? / ?? / ??
        Time: ???
        Venue: BLUE ROSE Server
        Dress Code: BLACK & WHITE
        You have been invited to ???.`;
    try {
        await navigator.clipboard.writeText(text);
        alert("Invitation copied!");
    } catch (error) {
        alert("ไม่สามารถคัดลอกได้ กรุณาลองใหม่");
    }
}
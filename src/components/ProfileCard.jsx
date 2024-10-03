export default function ProfileCard ({image, fullName, bio, about, socialMedia1, socialMedia2}) {
    return (
        <article>
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <div>
                    <div>
                        <h3>{fullName}</h3>
                        <p>{bio}</p>
                    </div>
                    <div>
                        <img src={socialMedia1} alt="" />
                        <img src={socialMedia2} alt="" />
                    </div>
                </div>
                <div>
                    <p>{about}</p>
                </div>
            </div>
        </article>
    );
}
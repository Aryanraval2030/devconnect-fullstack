function ProfileBox({ avatar, username, role, skills, viewPro }) {
  return (
    <div className=" border-2 h-[50vh] w-[40vw] border-white">
      <h1>{avatar}</h1>
      <h1>{username}</h1>
      <h1>{role}</h1>
      <div>
        <h1>{skills} </h1>
      </div>
      <button>{viewPro}</button>
    </div>
  );
}

export default ProfileBox;

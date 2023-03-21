export default function UserProfileImages(props) {
  let userImages = props.userImages.gallery;
  return (
    <div className='userProfileImagess topline'>
      <h4>Profile Images</h4>
      <div className='devider'></div>
      <div className='userProfileImagess__gallery'>
        {Object.entries(userImages).map((item, index) => {
          const galleryStyle = (src) => ({
            backgroundImage: 'url(http://localhost:3000/image' + src[1] + ')',
          });

          return (
            <div
              key={index}
              style={galleryStyle(item)}
              className='userProfileImagess__item'
            ></div>
          );
        })}
      </div>
    </div>
  );
}

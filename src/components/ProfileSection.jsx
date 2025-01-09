import Letters from './Letters';

const ProfileSection = ({ title, content }) => (
  <div className="mb-6">
    <Letters value={title} size="l" className="text-white" />
    <p className="text-white mt-2">{content}</p>
  </div>
);

export default ProfileSection;

import * as Icons from 'react-icons/fa';

const DynamicFaIcon = ({ name }) => {
  const IconComponent = Icons[name];

  if (!IconComponent) {
    return <Icons.FaLink />;
  }

  return <IconComponent />;
};

export default DynamicFaIcon;
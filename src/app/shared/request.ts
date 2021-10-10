export const getServerURL = (url: any = '') =>
  `https://hackathon-fsb-backend.herokuapp.com/${url}`;

export const getHeader = () => {
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };
};

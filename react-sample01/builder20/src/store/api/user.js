import axios from 'axios';

export const getUserMetaInfo = () => axios.post('/api/user/metaInfo');

const API_END_POINT = ' https://uikt6pohhh.execute-api.ap-northeast-2.amazonaws.com/dev'; 

export const request = async (url) => {
  try {
    const res = await fetch(`${API_END_POINT}${url}`); 

    if (res.ok) {
      return await res.json();
    }
    throw new Error('API 호출 오류');
    
  } catch (e) {
    alert(e.message)
  }
};

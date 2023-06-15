
Dashboard
const resp = await ajaxGet( `${BASE_URL}/survey/pagetemplate/10/0`);
const resp = await ajaxGet( `${BASE_URL}/survey/pagetest/10/0`);
const resp = await ajaxGet( `${BASE_URL}/survey/page/10/0`);

Analytics.
const response = await ajaxPost(`${BASE_URL}/result/analytics`,{quizId});

Edit
const resp = await ajaxPost(`${BASE_URL}/survey/find`,{quizId});

Register
  const response = await fetch( `${BASE_URL}/register` , {

Show
 const url = `${BASE_URL}/show/${quizId}`;  
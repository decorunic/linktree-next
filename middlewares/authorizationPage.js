import cookies from 'next-cookies';

export function unauthorizedPage(context) {
  return new Promise(resolve => {
    const allCookies = cookies(context);
  
    if (allCookies.token) {
      return context.res.writeHead(302, 
        { Location: '/linktree/admin' 
      }).end();
    }

    return resolve('unauthorized');
  })
}

export function authorizationPage(context) {
  return new Promise(resolve => {
    const allCookies = cookies(context);

    if(!allCookies.token) {
      return context.res.writeHead(302, {
        Location: '/linktree/login'
      }).end();
    }

    return resolve({
      token: allCookies.token
    });
  })
}

export function logout(context) {
  return new Promise(resolve => {
    context.res.writeHead(302, {
      Location: '/linktree/login',
      'Set-Cookie': 'token=; path=/linktree; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
    }).end();
  })
}
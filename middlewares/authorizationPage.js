import cookies from 'next-cookies';

export function unauthorizedPage(context) {
  return new Promise(resolve => {
    const allCookies = cookies(context);
  
    if (allCookies.token) {
      return context.res.writeHead(302, 
        { Location: '/admin' 
      }).end();
    }

    return resolve('unauthorized');
  })
}
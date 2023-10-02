export default function isAuth(request: Request, key: string): boolean {
  const bearerHeader = request.headers.get('Authorization')
  if (!bearerHeader || !bearerHeader.startsWith('Bearer ')) {
    return false
  }

  const authKey = bearerHeader.slice(7)

  return authKey === key
}

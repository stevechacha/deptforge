import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className="wrap section py-16">
      <p className="empty-note">
        Not found.{' '}
        <Link to="/" className="cursor-pointer text-copper-bright">
          Back to the map →
        </Link>
      </p>
    </div>
  )
}

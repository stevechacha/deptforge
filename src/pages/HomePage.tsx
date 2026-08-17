import { Link } from 'react-router-dom'
import { CircuitMap } from '../components/CircuitMap'
import { DeptsSection } from '../components/DeptGrid'

export function HomePage() {
  return (
    <>
      <div className="wrap relative pb-10 pt-[76px]">
        <div className="eyebrow">A Stage-By-Stage Learning Pathway</div>
        <h1 className="mb-[22px] mt-0 max-w-[820px] text-[clamp(34px,5.6vw,58px)] font-semibold leading-[1.05]">
          Every tech company runs on <em className="not-italic text-copper-bright">seven departments</em>.
          <br />
          Find out which one is yours.
        </h1>
        <p className="lede mb-[34px] mt-0 max-w-[620px] font-serif text-lg text-ink-muted">
          This map breaks down the full tech ecosystem behind a modern company —
          who builds it, who protects it, who reads its data, who trains its
          models — and exactly what you&apos;d need to learn, stage by stage, to
          join. Pick a department, then a role, and get a real course outline:
          what&apos;s needed now, and what comes next.
        </p>
        <div className="flex flex-wrap gap-3.5">
          <Link to="/departments" className="btn">
            Explore departments →
          </Link>
          <button
            type="button"
            className="btn ghost"
            onClick={() => document.getElementById('searchInput')?.focus()}
          >
            Search a skill
          </button>
        </div>
        <CircuitMap />
        <div className="pathway-strip">
          <p>
            <strong>New to tech entirely?</strong> Most learners start in Software
            Engineering or IT Operations &amp; Support — the roles with the widest
            hiring net and the clearest self-taught path in — then branch outward
            into data, platform, or security as their interests sharpen.
          </p>
          <Link to="/departments/software-engineering" className="btn ghost">
            Start with Software Engineering →
          </Link>
        </div>
      </div>
      <DeptsSection />
    </>
  )
}



const SectionTitle = ({ props }) => {
  const { img, text } = props
  return (
    <div className='flex lg:pt-16 md:pt-16 pt-6 mb-8'>
      <div className="glass-card py-2.5 px-6 lg:text-xs md:text-xs text-[10px] items-center gap-3 rounded-full flex uppercase tracking-[0.2em] font-bold text-accent border border-white/5">
        <lord-icon
          target="div"
          src={img}
          trigger="hover"
          colors="primary:#03c988"
          style={{ width: "20px", height: "20px" }}>
        </lord-icon>
        {text}
      </div>
    </div>
  )
};

export default SectionTitle;
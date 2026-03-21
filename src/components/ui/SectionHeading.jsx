export default function SectionHeading({ title, subtitle, light = false }) {
  return (
    <div className="text-center mb-12">
      <h2 className={`font-heading font-bold text-3xl md:text-4xl mb-4 ${light ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      <div className="w-12 h-1 bg-primary-500 mx-auto mb-4 rounded-full" />
      {subtitle && (
        <p className={`font-body text-lg max-w-2xl mx-auto ${light ? 'text-white/60' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

function Hero({ title, description }: { title: string; description: string }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center pt-12 pb-12 gap-8 text-primary-foreground bg-gradient-to-br from-primary to-primary/80 md:items-start md:pl-[10%]">
        <h1 className="text-[clamp(2rem,1.375rem+2vw,2.875rem)]">{title}</h1>
        <h4 className="text-[clamp(1.1875rem,0.9643rem+0.7143vw,1.5rem)] text-center max-w-[80%] md:text-left">
          {description}
        </h4>
      </div>
    </>
  );
}

export default Hero;

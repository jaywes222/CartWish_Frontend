import React from 'react'
import HeroSection from './HeroSection'
import iphone from '../../assets/iphone-14-pro.webp';
import mac from '../../assets/mac-system-cut.jfif';
import FeaturedProducts from './FeaturedProducts';

const HomePage = () => {
    return (
		<>
			{/*Hero Section */}
			<HeroSection
				title="Buy iPhone 14 Pro"
				subtitle="Experience the power of the latest iPhone 14 with our most Pro camera ever"
				link="/product/66b60a0aab0f90041ea6b69b"
				image={iphone}
			/>
			{/* Featured Products */}
			<FeaturedProducts />
			{/* Featured Products */}
			<HeroSection
				title="Build the ultimate setup"
				subtitle="You can add Studio Display and color-matched Magic accessories to your bag after you configure your Mac mini."
				link="/product/66b60a0aab0f90041ea6b6a3"
				image={mac}
			/>
			{/* Hero Section */}
		</>
	);
}

export default HomePage

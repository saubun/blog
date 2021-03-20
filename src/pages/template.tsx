import React from 'react';

export default function template() {
	return (
		<div>
			<header className="header">
				<div className="title">
					<h1>Hello World</h1>
				</div>
				<div className="links">
					<a href="#">Home</a>
					<a href="#">Posts</a>
					<a href="#">Contact</a>
				</div>
			</header>
			<hr />
			<section className="container">
				<h2 className="post-title">Why I am</h2>
				<p className="paragraph">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel illum vitae inventore autem
					nostrum porro saepe fuga quae nam. Provident, odit. Quos iure dicta cumque quia ea
					corporis minus nulla perspiciatis molestias, aut voluptatum iste a explicabo autem nisi
					eaque ullam itaque. Ratione ipsam eum velit, dolorum expedita cumque sapiente alias unde
					est praesentium, eligendi sit placeat labore, quas veritatis id! Amet, nisi tempore.
					Voluptatum, saepe ducimus? Suscipit magni quibusdam beatae alias animi dolorum. Molestiae
					obcaecati illo facilis earum nisi!
				</p>
				<p className="paragraph">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel illum vitae inventore autem{' '}
					<code className="language-javascript">console.log('Hello World')</code> nostrum porro
					saepe fuga quae nam. Provident, odit. Quos iure dicta cumque quia ea corporis minus nulla
					perspiciatis molestias, aut voluptatum iste a explicabo autem nisi eaque ullam itaque.
					Ratione ipsam eum velit, dolorum expedita cumque sapiente alias unde est praesentium,
					eligendi sit placeat labore, quas veritatis id! Amet, nisi tempore. Voluptatum, saepe
					ducimus? Suscipit magni quibusdam beatae alias animi dolorum. Molestiae obcaecati illo
					facilis earum nisi! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi ea
					cupiditate iste rem, nobis ut aspernatur mollitia facilis, eius vel optio saepe hic natus?
					Nobis fugit quia tempora ducimus ab?
				</p>
				{/* pretter-ignore */}
				<pre>
					<code className="language-javascript">
						{`var engine: TSE.Engine;

// Entry Point
window.onload = () => {
	engine = new TSE.Engine();
	engine.start();
};

// Resize canvas
window.onresize = () => {
	engine.resize();
}`}
					</code>
				</pre>
				<div className="posts-list">
					<div className="card">
						<h2 className="card-title">Post One</h2>
						<p className="card-description">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum eligendi porro aliquid
							error ab quaerat at voluptates est vitae corporis.
						</p>
					</div>
				</div>
			</section>
			<hr />
			<footer className="footer">
				<div className="footer-text">
					<h4>This site was created by Marceline</h4>
				</div>
				<div className="links">
					<a href="#">Home</a>
					<a href="#">Posts</a>
					<a href="#">Contact</a>
				</div>
			</footer>
		</div>
	);
}

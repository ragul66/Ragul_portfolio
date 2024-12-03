import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Internship's"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./logosayur.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Sayur Tech</div>
							<div className="work-subtitle">
								FullStack Developer
							</div>
							<div className="work-duration">
								January 2023-September 2023
							</div>
						</div>

						<div className="work">
							<img
								src="./logoVT.jpeg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Virtual Technology</div>
							<div className="work-subtitle">
								Front-end Developer
							</div>
							<div className="work-duration">
								June 2024-July2024
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;

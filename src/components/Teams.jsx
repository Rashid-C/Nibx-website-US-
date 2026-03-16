import Title from "./Title";
import { teamData } from "../assets/assets";
import { motion } from "motion/react";

const Teams = () => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white"
        >
            <Title
                title="Meet the team"
                desc="A passionate team dedicated to delivering quality electronics and exceptional service."
            />
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
                {teamData.map((team, index) => {
                    const CardWrapper = team.link ? "a" : "div";
                    const wrapperProps = team.link
                        ? { href: team.link, target: "_blank", rel: "noopener noreferrer", "aria-label": `Visit ${team.name}'s website` }
                        : {};

                    return (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: false }}
                            key={index}
                        >
                            <CardWrapper
                                {...wrapperProps}
                                className={`flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-103 transition-all duration-400 ${team.link ? "cursor-pointer hover:border-primary/50 hover:shadow-primary/10" : ""}`}
                            >
                                <div className="relative">
                                    <img
                                        src={team.image}
                                        alt={team.name}
                                        loading="lazy"
                                        className="w-12 h-12 rounded-full object-cover object-top"
                                    />
                                    {team.link && (
                                        <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-primary rounded-full border-2 border-white dark:border-gray-900" title="Portfolio" />
                                    )}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-sm">{team.name}</h3>
                                    <p className="text-xs opacity-60">{team.title}</p>
                                    {team.link && (
                                        <p className="text-xs text-primary mt-0.5 font-medium">rashidc.site ↗</p>
                                    )}
                                </div>
                            </CardWrapper>
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    );
};

export default Teams;

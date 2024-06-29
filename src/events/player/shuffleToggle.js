import playingEmbed from "../../modules/playingEmbed.js";
import playingButtons from "../../modules/playingButtons.js";

export const data = {
  name: "shuffleToggle",
  type: "player",
};

export async function execute(queue) {
  try {
    await queue.metadata.message?.edit({
      embeds: [playingEmbed(queue, track)],
      components: playingButtons(queue),
    });
  } catch {
    // ignore
  }
}

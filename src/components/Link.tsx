import { component$, Slot } from "@builder.io/qwik";
import type { QwikIntrinsicElements } from "@builder.io/qwik";

export const Link = component$<QwikIntrinsicElements["a"]>(
  ({ class: className, ...props }) => {
    return (
      <a
        class={[
          "text-blue-600 visited:text-purple-700 hover:underline",
          className,
        ]}
        {...props}
      >
        <Slot />
      </a>
    );
  },
);

export const HomeLink = component$<QwikIntrinsicElements["a"]>((props) => {
  return (
    <Link href="/" {...props}>
      ⃪ Home
    </Link>
  );
});

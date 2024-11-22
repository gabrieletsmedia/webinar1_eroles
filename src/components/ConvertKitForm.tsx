import { Button } from "@/components/ui/button"

export function ConvertKitForm() {
  return (
    <form
      action="https://app.kit.com/forms/7336030/subscriptions"
      method="post"
      data-sv-form="7336030"
      data-uid="9ff3d30621"
      data-format="inline"
      data-version="5"
      className="space-y-6"
    >
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-white">Register Now</h2>
        <p className="text-white/90">
          Join us to receive relevant materials and insights from the region's leading legal experts.
        </p>
      </div>

      <div className="space-y-4">
        <input
          className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-[#00A7E1] focus:border-transparent transition-shadow"
          name="email_address"
          aria-label="Email"
          placeholder="Email"
          type="email"
          required
        />

        <input
          className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-[#00A7E1] focus:border-transparent transition-shadow"
          name="fields[nome]"
          aria-label="Name"
          placeholder="Name"
          type="text"
          required
        />

        <input
          className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-[#00A7E1] focus:border-transparent transition-shadow"
          name="fields[sobrenome]"
          aria-label="Surname"
          placeholder="Surname"
          type="text"
          required
        />

        <input
          className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-[#00A7E1] focus:border-transparent transition-shadow"
          name="fields[cargo]"
          aria-label="Job title"
          placeholder="Job title"
          type="text"
          required
        />

        <input
          className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-[#00A7E1] focus:border-transparent transition-shadow"
          name="fields[empresa]"
          aria-label="Company"
          placeholder="Company"
          type="text"
          required
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-[#00A7E1] hover:bg-[#0086b3] text-white rounded-lg py-6 text-lg font-medium"
      >
        Register for Webinar
      </Button>

      <p className="text-sm text-white/70 text-center">
        By registering for this event, you agree to receive communications regarding this webinar and updates on digital assets regulation. 
        Your information will be processed in accordance with applicable privacy laws. You may opt out at any time.
      </p>
    </form>
  );
}
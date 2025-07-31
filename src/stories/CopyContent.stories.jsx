import CopyContent from "../components/CopyContent";
import { Button } from "@mui/material";
import { useState } from "react";

export default {
  title: 'Component Copy',
  component: CopyContent,
  parameters: {
    layout: 'centered',
  },
};

export const Example = {
  args: {
    repoInfo: {
      name: "Test",
      path: "Test",
    },
  },
  render: (args) => {
    const [open, setOpen] = useState(false);
    const [reposModCount, setReposModCount] = useState(0);
    return (
      <>
        <Button color="primary"  size="small" aria-label="copy content" onClick={() => setOpen(s => !s)}>
          Copy
        </Button>
        <CopyContent
          repoInfo={args.repoInfo}
          open={open}
          closeFn={() => setOpen(false)}
          reposModCount={reposModCount}
          setReposModCount={setReposModCount}
        />
      </>
    )
  },
}

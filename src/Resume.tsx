import React from "react";
import {
	Box,
	Card,
	CardContent,
	CardHeader,
	Typography,
	Button,
	IconButton,
	Stack,
	Divider,
	Tooltip,
	Paper,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import PrintIcon from "@mui/icons-material/Print";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import VisibilityIcon from "@mui/icons-material/Visibility";

/**
 * ResumePreview (no uploads)
 *
 * A minimal, production‑ready preview + download section for a single resume PDF.
 * No uploading. Pass your hosted PDF URL and (optionally) a filename hint.
 *
 * Props:
 *  - title?: string — Header text (default: "Resume")
 *  - url: string — Public/hosted PDF URL for your resume (required)
 *  - fileNameHint?: string — Suggested filename when downloading
 *  - height?: number — Preview height in pixels (default: 720)
 */
export const ResumePreview = ({
	resumeCardRef,
}: {
	resumeCardRef: React.RefObject<HTMLDivElement>
}) => {
	const url = "/CallumMackenzieResume.pdf";
	const fileNameHint = "CallumMackenzieResume.pdf";
	const title = "Resume";
	const height = 720;

	function openInNewTab() {
		if (!url) return;
		window.open(url, "_blank", "noopener,noreferrer");
	}

	function download() {
		if (!url) return;
		const a = document.createElement("a");
		a.href = url;
		a.download = fileNameHint; // browsers may ignore for cross‑origin, but works for same‑origin
		document.body.appendChild(a);
		a.click();
		a.remove();
	}

	return (
		<Paper elevation={4} className='container py-2 px-2 my-5 text-center' ref={resumeCardRef}>
			<Card elevation={3} sx={{ borderRadius: 3, overflow: "hidden" }} >
				<CardHeader
					title={
						<Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
							<Stack direction="row" spacing={1} alignItems="center">
								<PictureAsPdfIcon />
								<Typography variant="h6">{title}</Typography>
							</Stack>
							<Stack direction="row" spacing={1}>
								<Tooltip title="Download">
									<span>
										<Button onClick={download} startIcon={<DownloadIcon />} variant="contained">
											Download
										</Button>
									</span>
								</Tooltip>
							</Stack>
						</Stack>
					}
				/>

				<Divider />

				<CardContent>
					<Box sx={{ flex: 1, minHeight: height, borderRadius: 2, overflow: "hidden", border: 1, borderColor: "divider" }}>
						{url ? (
							<Box sx={{ height: height, position: "relative", bgcolor: "background.default" }}>
								<embed src={url + "#toolbar=0&navpanes=0"} type="application/pdf" width="100%" height="100%" />
								<Box sx={{ position: "absolute", bottom: 8, right: 8, display: "flex", gap: 1 }}>
									<Tooltip title="Open full screen">
										<IconButton color="primary" onClick={openInNewTab}>
											<VisibilityIcon />
										</IconButton>
									</Tooltip>
									<Tooltip title="Download">
										<IconButton color="primary" onClick={download}>
											<DownloadIcon />
										</IconButton>
									</Tooltip>
								</Box>
							</Box>
						) : (
							<EmptyState height={height} />
						)}
					</Box>
				</CardContent>
			</Card>
		</Paper>
	);
}

function EmptyState({ height = 720 }: { height?: number }) {
	return (
		<Box
			sx={{
				height,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
				gap: 1,
				bgcolor: "background.paper",
			}}
		>
			<PictureAsPdfIcon sx={{ fontSize: 48, opacity: 0.6 }} />
			<Typography variant="subtitle1">Resume URL not set</Typography>
			<Typography variant="body2" color="text.secondary">
				Pass your PDF URL with the <code>url</code> prop to preview and download.
			</Typography>
		</Box>
	);
}

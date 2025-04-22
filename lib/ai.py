import torch
from PIL import Image
from io import BytesIO
from carvekit.api.high import HiInterface

def remove_background(image_data):
    img = Image.open(BytesIO(image_data))

    interface = HiInterface(
        object_type="object",
        batch_size_seg=1,
        batch_size_matting=1,
        device="cuda" if torch.cuda.is_available() else "cpu",
        seg_mask_size=320,
        matting_mask_size=2048,
        trimap_prob_threshold=231,
        trimap_dilation=30,
        trimap_erosion_iters=5,
    )

    result = interface([img])[0]

    buffer = BytesIO()
    result.save(buffer, format="PNG")
    return buffer.getvalue()